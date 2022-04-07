export default function AuthFormCenterText(props: { text: string }) {
  return (
    <div className="text-center text-md-center mb-4 mt-md-0">
      <h3 className="mb-0">{props.text}</h3>
    </div>
  );
}
