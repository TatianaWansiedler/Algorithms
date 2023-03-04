
function hanoiTowers(n, x, z, y) {                         // переложить n дисков с x на z, используя y
    if (n === 1) {
        console.log(`Move disk 1 from ${x} to ${z}`)
        return
    } else {
        hanoiTowers(n - 1, x, y, z)
        console.log(`Move disk ${n} from ${x} to ${z}`)
        hanoiTowers(n - 1, y, z, x)
    }
}
hanoiTowers(3, 1, 3, 2)