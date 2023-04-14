import OptionalProps from "./OptionalProps";
import StringLiterals from "./StringLiterals";
import TemplateLiterals from "./TemplateLiterals";

function AdvancedProps() {
  return (
    <div>
      <h3>Advanced props</h3>
      <StringLiterals status="loaded" />
      <StringLiterals status="loading" />
      <TemplateLiterals option1="dark m" option2="dark l" option3="dark s" />
      <TemplateLiterals option1="light l" option2="light s" option3="banana" />
      <OptionalProps optional />
      <OptionalProps />
    </div>
  )
}

export default AdvancedProps