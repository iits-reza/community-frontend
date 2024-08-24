import { format } from "date-fns";
type props = {
  value: string | null;
};
const CustomTimestampField = ({ value }: props) => {
  if (!value) return null;
  const formatDate = format(new Date(value), "MM,dd,yyyy - hh:mm a");
  return <div>{formatDate}</div>;
};

export default CustomTimestampField;
