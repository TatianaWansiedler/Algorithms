class Person {
    constructor(personName) {
        this.personName = personName;
        this.mother = null;
        this.father = null;
    }

}
let p1 = new Person('Маша');
let p11 = new Person('Таня');
let p12 = new Person('Василий');;
p1.mother = p11;
p1.father = p12;
let p111 = new Person('Ольга');;
let p112 = new Person('Иван');
p11.mother = p111
p11.father = p112
let p121 = new Person('Анна');;
let p122 = new Person('Дмитрий');
p12.mother = p121
p12.father = p122

// (Маша( Таня( Ольга(  ,  ), Иван(  ,   ) ), Василий ( Анна(   ,   ), Дмитрий(   ,   ) ) ) )

class Tree {
    constructor() {
        this.drow = ''
        this.depthTraversing = (root) => {
            if (root !== null) {
                this.drow += `${root.personName}`
                if (root.mother !== null || root.fater !== null) {
                    this.drow += '( '
                    if (root.mother !== null) root.mother = this.depthTraversing(root.mother)
                    this.drow += ', '
                    if (root.mother !== null) root.father = this.depthTraversing(root.father)
                    this.drow += ' )'
                }

            }
            return this.drow
        }
        this.rerender = (root) => {
            this.drow = ''
            this.depthTraversing(root)
            return this.drow
        }
    }
}


const tree = new Tree()

console.log(tree.rerender(p1));
