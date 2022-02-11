
export default function pers(obj) {
    if (obj.health > 50) {
        return 'healthy'
    }
    if (obj.health <= 50 && obj.health >= 15) {
        return 'wounded'
    }
    if (obj.health < 15) {
        return 'critical'
    }
}