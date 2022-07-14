function areaOfTriangle(x, y, z) {
    let s = (x + y + z)/2
    let area = (s*(s-x) * (s-y) * (s-z)) ** 0.5
    return "area of the triangle is => " + area
}

let triangle1 = areaOfTriangle(3, 4, 5)
let triangle2 = areaOfTriangle(10, 6, 8)
let triangle3 = areaOfTriangle(5, 6, 7)

console.log(triangle1)
console.log(triangle2)
console.log(triangle3)