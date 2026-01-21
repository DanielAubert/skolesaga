/**
 * GeoGebra Validation Engine
 *
 * Validates user answers against expected values in GeoGebra applets.
 */

import type {
  ExerciseValidation,
  ValidationResult,
  PointValidation,
  ValueValidation,
  ExistsValidation,
  QuadrantValidation,
  CircleValidation,
  PolygonValidation,
  FunctionValidation,
  LineValidation,
} from './validation-types';
import type { GeoGebraAPI } from '@/components/geogebra/geogebra-embed';

/**
 * Validate a single exercise rule against the GeoGebra state
 */
export function validateRule(
  api: GeoGebraAPI,
  validation: ExerciseValidation
): ValidationResult {
  try {
    switch (validation.type) {
      case 'point':
        return validatePoint(api, validation);
      case 'value':
        return validateValue(api, validation);
      case 'exists':
        return validateExists(api, validation);
      case 'quadrant':
        return validateQuadrant(api, validation);
      case 'circle':
        return validateCircle(api, validation);
      case 'polygon':
        return validatePolygon(api, validation);
      case 'function':
        return validateFunction(api, validation);
      case 'line':
        return validateLine(api, validation);
      default:
        return {
          validationId: (validation as ExerciseValidation).id,
          passed: false,
          message: 'Ukjent valideringstype',
        };
    }
  } catch (error) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Feil ved validering: ${error instanceof Error ? error.message : 'Ukjent feil'}`,
    };
  }
}

/**
 * Validate all rules for an exercise
 */
export function validateExercise(
  api: GeoGebraAPI,
  validations: ExerciseValidation[]
): { passed: boolean; results: ValidationResult[] } {
  const results = validations.map((v) => validateRule(api, v));
  const passed = results.every((r) => r.passed);
  return { passed, results };
}

// Individual validation functions

function validatePoint(api: GeoGebraAPI, validation: PointValidation): ValidationResult {
  const { name, expected, tolerance = 0.1 } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Punkt ${name} finnes ikke. Opprett punktet først.`,
    };
  }

  const x = api.getXcoord(name);
  const y = api.getYcoord(name);

  const xMatch = Math.abs(x - expected.x) <= tolerance;
  const yMatch = Math.abs(y - expected.y) <= tolerance;

  if (xMatch && yMatch) {
    return {
      validationId: validation.id,
      passed: true,
      message: `Riktig! ${name} er på (${expected.x}, ${expected.y})`,
    };
  }

  return {
    validationId: validation.id,
    passed: false,
    message: `${name} er på (${x.toFixed(1)}, ${y.toFixed(1)}), men skal være på (${expected.x}, ${expected.y})`,
  };
}

function validateValue(api: GeoGebraAPI, validation: ValueValidation): ValidationResult {
  const { name, expected, tolerance = 0.01 } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Variabelen ${name} finnes ikke.`,
    };
  }

  const value = api.getValue(name);
  const match = Math.abs(value - expected) <= tolerance;

  if (match) {
    return {
      validationId: validation.id,
      passed: true,
      message: `Riktig! ${name} = ${expected}`,
    };
  }

  return {
    validationId: validation.id,
    passed: false,
    message: `${name} = ${value.toFixed(2)}, men skal være ${expected}`,
  };
}

function validateExists(api: GeoGebraAPI, validation: ExistsValidation): ValidationResult {
  const { name } = validation;

  if (api.exists(name)) {
    return {
      validationId: validation.id,
      passed: true,
      message: `${name} finnes`,
    };
  }

  return {
    validationId: validation.id,
    passed: false,
    message: `${name} finnes ikke. Opprett objektet først.`,
  };
}

function validateQuadrant(api: GeoGebraAPI, validation: QuadrantValidation): ValidationResult {
  const { name, quadrant } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Punkt ${name} finnes ikke.`,
    };
  }

  const x = api.getXcoord(name);
  const y = api.getYcoord(name);

  let actualQuadrant: number;
  if (x > 0 && y > 0) actualQuadrant = 1;
  else if (x < 0 && y > 0) actualQuadrant = 2;
  else if (x < 0 && y < 0) actualQuadrant = 3;
  else if (x > 0 && y < 0) actualQuadrant = 4;
  else {
    return {
      validationId: validation.id,
      passed: false,
      message: `${name} ligger på en akse, ikke i en kvadrant.`,
    };
  }

  if (actualQuadrant === quadrant) {
    return {
      validationId: validation.id,
      passed: true,
      message: `Riktig! ${name} er i kvadrant ${quadrant}`,
    };
  }

  return {
    validationId: validation.id,
    passed: false,
    message: `${name} er i kvadrant ${actualQuadrant}, men skal være i kvadrant ${quadrant}`,
  };
}

function validateCircle(api: GeoGebraAPI, validation: CircleValidation): ValidationResult {
  const { name, center, radius, tolerance = 0.1 } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Sirkel ${name} finnes ikke.`,
    };
  }

  // GeoGebra returns 'circle' for circles created with Circle() command
  // and 'conic' for circles created from equations
  const objectType = api.getObjectType(name);
  if (objectType !== 'conic' && objectType !== 'circle') {
    return {
      validationId: validation.id,
      passed: false,
      message: `${name} er ikke en sirkel (type: ${objectType}).`,
    };
  }

  let cx = 0;
  let cy = 0;
  let r = 0;

  // For 'circle' type objects created with Circle() command,
  // we need to parse the definition string because Center() and Radius() don't work
  if (objectType === 'circle') {
    // Get the definition string, e.g., "Circle((0, 0), 3)" or "Sirkel((0, 0), 3)"
    const defString = api.getDefinitionString(name);

    // Try to parse "Circle((x, y), r)" or "Sirkel((x, y), r)" pattern
    // Also handle "Circle(A, r)" where A is a point
    const circleMatch = defString.match(/(?:Circle|Sirkel)\s*\(\s*\(?\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)?\s*,\s*(-?[\d.]+)\s*\)/i);

    if (circleMatch) {
      cx = parseFloat(circleMatch[1]);
      cy = parseFloat(circleMatch[2]);
      r = parseFloat(circleMatch[3]);
    } else {
      // Try Norwegian human-readable format: "Sirkel med sentrum i (x, y) og radius r"
      const norwegianMatch = defString.match(/Sirkel med sentrum i \((-?[\d.]+),\s*(-?[\d.]+)\) og radius (-?[\d.]+)/i);
      if (norwegianMatch) {
        cx = parseFloat(norwegianMatch[1]);
        cy = parseFloat(norwegianMatch[2]);
        r = parseFloat(norwegianMatch[3]);
      } else {
        // Try alternative: Circle(PointName, radius) - need to get the point's coordinates
        const pointMatch = defString.match(/(?:Circle|Sirkel)\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*,\s*(-?[\d.]+)\s*\)/i);
        if (pointMatch) {
          const pointName = pointMatch[1];
          if (api.exists(pointName)) {
            cx = api.getXcoord(pointName);
            cy = api.getYcoord(pointName);
          }
          r = parseFloat(pointMatch[2]);
        } else {
          // Fallback: try getValue on the circle for radius (works for some circle types)
          // and try to find center point
          r = api.getValue(name);
          // If we can't parse, return an error
          if (isNaN(r) || r === 0) {
            return {
              validationId: validation.id,
              passed: false,
              message: `Kunne ikke lese sirkelens egenskaper. Prøv å definere sirkelen med: ${name} = Circle((${center.x}, ${center.y}), ${radius})`,
            };
          }
        }
      }
    }
  } else {
    // For 'conic' type, use Center() and Radius() commands
    api.evalCommand(`_tempCenter = Center(${name})`);
    api.evalCommand(`_tempRadius = Radius(${name})`);

    cx = api.getXcoord('_tempCenter');
    cy = api.getYcoord('_tempCenter');
    r = api.getValue('_tempRadius');

    // Clean up temp variables
    api.evalCommand('Delete(_tempCenter)');
    api.evalCommand('Delete(_tempRadius)');
  }

  const centerMatch =
    Math.abs(cx - center.x) <= tolerance && Math.abs(cy - center.y) <= tolerance;
  const radiusMatch = Math.abs(r - radius) <= tolerance;

  if (centerMatch && radiusMatch) {
    return {
      validationId: validation.id,
      passed: true,
      message: `Riktig! Sirkel med sentrum (${center.x}, ${center.y}) og radius ${radius}`,
    };
  }

  const issues: string[] = [];
  if (!centerMatch) issues.push(`sentrum er (${cx.toFixed(1)}, ${cy.toFixed(1)})`);
  if (!radiusMatch) issues.push(`radius er ${r.toFixed(1)}`);

  return {
    validationId: validation.id,
    passed: false,
    message: `Sirkel ${name}: ${issues.join(', ')}`,
  };
}

function validatePolygon(api: GeoGebraAPI, validation: PolygonValidation): ValidationResult {
  const { name, vertexCount: _vertexCount, area, perimeter, tolerance = 0.1 } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Polygon ${name} finnes ikke.`,
    };
  }

  // Check vertex count by getting the polygon vertices
  // This is tricky - we'll use area and perimeter instead if specified

  const issues: string[] = [];
  let passed = true;

  if (area !== undefined) {
    // GeoGebra stores polygon area as the object's value directly (shown as "= 12" next to the polygon)
    // First try getting the polygon's value directly
    let actualArea = api.getValue(name);

    // If that returns 0 or NaN, try the Area() command as fallback
    if (actualArea === 0 || isNaN(actualArea)) {
      api.evalCommand(`_tempArea = Area(${name})`);
      actualArea = api.getValue('_tempArea');
      api.evalCommand('Delete(_tempArea)');
    }

    if (Math.abs(actualArea - area) > tolerance) {
      issues.push(`areal er ${actualArea.toFixed(2)}, skal være ${area}`);
      passed = false;
    }
  }

  if (perimeter !== undefined) {
    // Try Perimeter() command - this generally works for polygons
    api.evalCommand(`_tempPerimeter = Perimeter(${name})`);
    let actualPerimeter = api.getValue('_tempPerimeter');
    api.evalCommand('Delete(_tempPerimeter)');

    // If Perimeter returns 0, try Omkrets (Norwegian command)
    if (actualPerimeter === 0 || isNaN(actualPerimeter)) {
      api.evalCommand(`_tempPerimeter = Omkrets(${name})`);
      actualPerimeter = api.getValue('_tempPerimeter');
      api.evalCommand('Delete(_tempPerimeter)');
    }

    if (Math.abs(actualPerimeter - perimeter) > tolerance) {
      issues.push(`omkrets er ${actualPerimeter.toFixed(2)}, skal være ${perimeter}`);
      passed = false;
    }
  }

  if (passed) {
    return {
      validationId: validation.id,
      passed: true,
      message: `Riktig! Polygon ${name} er korrekt.`,
    };
  }

  return {
    validationId: validation.id,
    passed: false,
    message: `Polygon ${name}: ${issues.join(', ')}`,
  };
}

function validateFunction(api: GeoGebraAPI, validation: FunctionValidation): ValidationResult {
  const { name, testPoints } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Funksjon ${name} finnes ikke.`,
    };
  }

  for (const { x, expectedY, tolerance = 0.1 } of testPoints) {
    const actualY = api.getValue(`${name}(${x})`);
    if (Math.abs(actualY - expectedY) > tolerance) {
      return {
        validationId: validation.id,
        passed: false,
        message: `${name}(${x}) = ${actualY.toFixed(2)}, men skal være ${expectedY}`,
      };
    }
  }

  return {
    validationId: validation.id,
    passed: true,
    message: `Riktig! Funksjon ${name} er korrekt.`,
  };
}

function validateLine(api: GeoGebraAPI, validation: LineValidation): ValidationResult {
  const { name, passesThroughPoints, tolerance = 0.1 } = validation;

  if (!api.exists(name)) {
    return {
      validationId: validation.id,
      passed: false,
      message: `Linje ${name} finnes ikke.`,
    };
  }

  // Check if each point lies on the line
  for (const point of passesThroughPoints) {
    api.evalCommand(`_tempPoint = (${point.x}, ${point.y})`);
    api.evalCommand(`_tempDist = Distance(_tempPoint, ${name})`);
    const dist = api.getValue('_tempDist');
    api.evalCommand('Delete(_tempPoint)');
    api.evalCommand('Delete(_tempDist)');

    if (dist > tolerance) {
      return {
        validationId: validation.id,
        passed: false,
        message: `Linjen går ikke gjennom punktet (${point.x}, ${point.y})`,
      };
    }
  }

  return {
    validationId: validation.id,
    passed: true,
    message: `Riktig! Linjen går gjennom alle punktene.`,
  };
}
