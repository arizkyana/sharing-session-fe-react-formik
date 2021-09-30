import * as Yup from 'yup';

export default Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required().min(8),
});
