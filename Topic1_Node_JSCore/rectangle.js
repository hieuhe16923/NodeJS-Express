// C1: Export các thành phần trong module rectangle
// exports.area = (l, w) => l * w;
// exports.perimeter = (l, w) => 2* (l + w);


// C2:
function area(l, w){
    return l * w
}

function perimeter(l, w){
    return 2 * (l + w);
}

module.exports = {
    area,
    perimeter
}