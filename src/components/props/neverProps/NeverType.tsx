type NumberType = {
  number: number;
}

type PositiveNumberType = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}

type NegativeNumberType = NumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
}

type ZeroNumberType = NumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: Boolean;
}

type NeverTypeProps = PositiveNumberType | NegativeNumberType | ZeroNumberType;

function NeverType({ number, isPositive, isNegative, isZero }: NeverTypeProps) {
  return (
    <div>
      value: {number} is { isPositive && 'positive' } { isNegative && 'negative' } { isZero && 'zero' }
    </div>
  )
}

export default NeverType