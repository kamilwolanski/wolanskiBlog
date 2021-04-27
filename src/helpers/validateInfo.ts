export default function validateInfo(values: typeof errors) {
  let errors = { name: '', email: '', subject: '', message: '' };

  if (!values.name.trim()) {
    errors.name = 'Podaj swoję imię';
  }

  if (!values.email) {
    errors.email = 'Adres email jest wymagany';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email jest niepoprawny';
  }

  if (!values.subject) {
    errors.subject = 'Nie podano tematu';
  }

  if (values.message.length < 10) {
    errors.message = 'Wiadomość musi zawierać conajmniej 10 znaków';
  }

  return errors;
}
