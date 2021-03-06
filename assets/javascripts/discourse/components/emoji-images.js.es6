import computed from 'ember-addons/ember-computed-decorators';
import { emojiUnescape } from 'discourse/lib/text';

export default Ember.Component.extend({
  classNames: ['emoji-images'],

  @computed('list')
  emojiHTML(list) {
    return list.split("|").map(et => emojiUnescape(`:${et}:`, { skipTitle: true }));
  },

  @computed('title')
  titleText(title) {
    return I18n.t(title);
  }
});
