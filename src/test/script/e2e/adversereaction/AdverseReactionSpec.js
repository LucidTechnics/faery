describe('faery adverse reaction search', function() {
  it('should add a term tag', function() {
    browser.get('http://localhost:8080/index.html');

    element(by.model('newDrug')).sendKeys('viagra');

	
    var drugList = element.all(by.repeater('item in drugList track by $index'));
    expect(drugList.count()).toEqual(1);
    expect(drugList.get(1).getText()).toEqual('viagra');
  });
});