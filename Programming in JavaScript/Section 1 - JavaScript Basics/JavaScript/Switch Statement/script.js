function displayShapeInfo (shape) {
   console.log(shape + ':');
   switch (shape) {
      case 'circle':
         console.log('The shape has no sides');
         break;
      case 'triangle':
         console.log('The shape has three sides');
         break;
      case 'square':
         console.log('The sides are equal length (square)');
      case 'rectangle': // eslint-disable-line no-fallthrough
         console.log('The shape is rectangular');
         break;
      default:
         console.log('The shape is a polygon of some kind');
   };
};

displayShapeInfo('circle');
displayShapeInfo('triangle');
displayShapeInfo('rectangle');
displayShapeInfo('square');
displayShapeInfo('trapezohedron');


// Important note: The "// eslint-disable-line no-fallthrough" line tells the linting tool that we do not want to display an error in this case. Many code analysis tools assumes that a case statement that does not have a break statement is a programmer error.