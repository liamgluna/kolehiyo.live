import { ClipLoader } from "react-spinners";

interface SpinnerProps {
  loading: boolean;
}

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <ClipLoader
      color="gray"
      loading={loading}
      cssOverride={override}
      size={120}
    />
  );
};

export default Spinner;
