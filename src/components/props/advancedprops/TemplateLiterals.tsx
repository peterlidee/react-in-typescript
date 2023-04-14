type ColorOption = 'dark' | 'light';
type SizeOption = 's' | 'm' | 'l';
// template literal
type Option1Type = `${ColorOption} ${SizeOption}`;
// with exclude (type utility)
type Option2Type = Exclude<Option1Type, 'dark m' | 'light m'>
// with union
type Option3Type = Option2Type | 'banana';

type TemplateLiteralsProps = {
  option1: Option1Type;
  option2: Option2Type;
  option3: Option3Type;
}

function TemplateLiterals({ option1, option2, option3 }: TemplateLiteralsProps) {
  return (
    <div>
      <strong>Template Literals</strong>: {option1}{' '}
      <strong>with exclude (type utility)</strong>: {option2}{' '}
      <strong>with union</strong>: {option3}{' '}
    </div>
  )
}

export default TemplateLiterals