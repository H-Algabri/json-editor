/* global Feature Scenario */
var assert = require('assert')

Feature('autocomplete')

Scenario('autocomplete should work @autocomplete', async (I) => {
  I.amOnPage('autocomplete.html')
  I.fillField('root', 'ir')
  I.waitForText('iran', 5, '.autocomplete-result-list')
  I.waitForText('iraq', 5, '.autocomplete-result-list')
  I.click('iraq', '.autocomplete-result:nth-child(2)')
  I.click('.get-value')
  assert.equal(await I.grabValueFrom('.value'), '"iraq"')
})
