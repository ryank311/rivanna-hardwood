import axios from 'axios';
import ConsultationActions from '../actions/ConsultationActions';

const ConsultationSource = {
  registerEmail: {
    remote(state, emailData) {
      return axios.post('/email', emailData);
    },
    success: ConsultationActions.registerEmailSuccess,
    error: ConsultationActions.registerEmailFailure
  },
  requestConsultation: {
    remote(state, emailData) {
      return axios.post('/request-consultation', emailData);
    },
    success: ConsultationActions.requestConsultationSuccess,
    error: ConsultationActions.requestConsultationFailure
  }
};

export default ConsultationSource;
