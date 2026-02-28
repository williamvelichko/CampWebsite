import Schedule from "../components/Schedule/Schedule";
import TemporaryNotice from "../components/TemporaryNotice/TemporaryNotice";
import { isTemporaryModeEnabled, temporaryModeMessage } from "../config/site";

export default function SchedulePage() {
  return (
    <div>
      {isTemporaryModeEnabled ? (
        <TemporaryNotice
          title={temporaryModeMessage.title}
          description={temporaryModeMessage.description}
        />
      ) : (
        <Schedule />
      )}
    </div>
  );
}
