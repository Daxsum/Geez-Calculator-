class GeezEngine {
    private geezMap = {
        0: "0",
        1: "፩",
        2: "፪",
        3: "፫",
        4: "፬",
        5: "፭",
        6: "፮",
        7: "፯",
        8: "፰",
        9: "፱",
        10: "፲",
        20: "፳",
        30: "፴",
        40: "፵",
        50: "፶",
        60: "፷",
        70: "፸",
        80: "፹",
        90: "፺",
    };

    convertToGeez(num: number): string {
        // step 1
        const asciiNumber: string = `${
            String(num).length % 2 === 0 ? "" : "0"
        }${num}`;

        // step 2, 3
        const asciiNumberGrouped = asciiNumber.match(
            /[\d]{2}/g
        ) as RegExpMatchArray;

        // step 4
        const asciiNumberExpanded: string[][] = asciiNumberGrouped.map(
            (group) => [
                group[0] === "0" ? "0" : `${Number(group[0]) * 10}`,
                `${group[1]}`,
            ]
        );

        const ethiopic: string[][] = asciiNumberExpanded.map(
            // @ts-ignore
            (group: string[]) => [
                // @ts-ignore
                this.geezMap[Number(group[0])],
                // @ts-ignore
                this.geezMap[Number(group[1])],
            ]
        );

        // step 6
        const ethiopicPrefixed = asciiNumberExpanded.map(
            (group: string[], index: number) => {
                const reverseIndex = asciiNumberExpanded.length - (index + 1);

                if (reverseIndex > 0) {
                    return ethiopic[index]
                        .concat(reverseIndex % 2 === 1 ? "፻" : "፼")
                        .join("");
                }

                return ethiopic[index].join("");
            }
        );

        // step 6.1 & 6.2
        return ethiopicPrefixed
            .join("")
            .replace(/00፻|0/g, "")
            .replace(/^፩(፻|፼)/, "$1");
    }
}

class GeezNumber extends GeezEngine {
    private _arabic: number;
    private _geez: string;

    constructor(_number: number) {
        super();

        this._arabic = _number;
        this._geez = this.convertToGeez(_number);
    }

    public toArabic(): number {
        return this._arabic;
    }

    public toGeez(): string {
        return this._geez;
    }
}

class Calculator {
    static add(_num1: GeezNumber, _num2: GeezNumber): GeezNumber {
        return new GeezNumber(_num1.toArabic() + _num2.toArabic());
    }

    static subtract(_num1: GeezNumber, _num2: GeezNumber): GeezNumber {
        if (_num1.toArabic() < _num2.toArabic()) {
            throw new Error(
                "NOT_SUPPORTED_ERROR: Subtraction is not supported in GeezNumber"
            );
        }

        return new GeezNumber(_num1.toArabic() - _num2.toArabic());
    }

    static multiply(_num1: GeezNumber, _num2: GeezNumber): GeezNumber {
        return new GeezNumber(_num1.toArabic() * _num2.toArabic());
    }

    static divide(_num1: GeezNumber, _num2: GeezNumber): GeezNumber {
        if (_num2.toArabic() === 0) {
            throw new Error(
                "NOT_SUPPORTED_ERROR: Division by zero is not supported in GeezNumber"
            );
        }

        const __result = new GeezNumber(_num1.toArabic() / _num2.toArabic());

        if (__result.toArabic() % 1 !== 0) {
            throw new Error(
                "NOT_SUPPORTED_ERROR: Decimal numbers are not supported in GeezNumber"
            );
        }

        return __result;
    }
}

const hundred = new GeezNumber(100);
const thousand = new GeezNumber(1000);

console.log(Calculator.add(hundred, thousand).toArabic());
console.log(Calculator.add(hundred, thousand).toGeez());
