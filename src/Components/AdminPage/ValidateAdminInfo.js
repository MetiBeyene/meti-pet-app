export default function validateInfo(values) {
  let errors = {};

  if (!values.Type.trim()) {
    errors.username = "Type required";
  }

  if (!values.Name) {
    errors.name = "Name required";
  }
  if (!values.Status) {
    errors.status = "Status is required";
  }

  if (!values.Color) {
    errors.color = "Password is required";
  }
  return errors;
}
