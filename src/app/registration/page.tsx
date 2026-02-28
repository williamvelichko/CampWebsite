import Registration from "../components/Registration/Registration";
import TemporaryNotice from "../components/TemporaryNotice/TemporaryNotice";
import { isTemporaryModeEnabled, temporaryModeMessage } from "../config/site";

export default function RegisterPage() {
  return (
    <div>
      {isTemporaryModeEnabled ? (
        <TemporaryNotice
          title={temporaryModeMessage.title}
          description={temporaryModeMessage.description}
        />
      ) : (
        <Registration />
      )}
    </div>
  );
}
