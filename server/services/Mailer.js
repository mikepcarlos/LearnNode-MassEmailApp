const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {

  constructor({ subject, recipients }, content){
    super();

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject =  subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.clickTracking(true, true);

    trackingSettings.setClickTracking(cliclickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

}

module.exports = Mailer;
