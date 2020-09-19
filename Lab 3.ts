class Bacteria
{
    public size: number;
    protected shape: string;
    public habitat: string;
    constructor(size: number, shape: string, habitat: string)
    {
        this.size=size;
        this.shape=shape;
        this.habitat=habitat;
    }
    public eat(): void 
    {

    }
    public reproduce(): void
    {

    }
}

class Archaea
{
    public size: number;
    protected shape: string;
    public habitat: string;
    constructor(size: number, shape: string, habitat: string)
    {
        this.size=size;
        this.shape=shape;
        this.habitat=habitat;
    }
    public eat(): void
    {

    }
    public reproduce(): void
    {

    }
}

class Virus
{
    public size: number;
    protected shape: string;
    protected host: string;
    constructor(size: number, shape: string, host: string)
    {
        this.size=size;
        this.shape=shape;
        this.host=host;
    }
    protected replicate(): void
    {

    }
}

abstract class Eukaryote
{
    protected sex: string;
    constructor(sex: string)
    {
        this.sex=sex;
    }
    public reproduce(): void
    {

    }
}

class Animal extends Eukaryote
{
    public habitat: string;
    public age: number;
    constructor(sex: string, habitat: string, age: number)
    {
        super(sex);
        this.habitat=habitat;
        this.age=age;
    }
    public eat(): void
    {

    }
    public reproduce(): void
    {

    }
}

interface IRaphinae extends Animal
{
    height: number;
    weight: number;
}

let Rex=new Animal("male","home",4);
