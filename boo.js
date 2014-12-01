//casper.test.begin('an extrabux user dropdown can be opened', 2, function(test) {
//    casper.start('http://www.extrabux.com/', function() {
//        test.assertExists('#userCorner .member');
//        this.click('#userCorner .member');
//        this.waitUntilVisible('.member-name .my-cash a', function() {
//            test.pass('Dropdown is open');
//        });
//    }).run(function() {
//        test.done();
//    });
//});


casper.test.begin('an extrabux locale dropdown can be opened', 2, function(test) {
    casper.start('http://www.extrabux.com/', function() {
        test.assertExists('.locale-switcher');
        this.mouseEvent('mouseover', '.locale-switcher .selected');
        this.waitUntilVisible('.locale-switcher .zh_CN', function() {
            // Do a lot of important things
            test.pass('Dropdown is open');
        }), function then() {    
        }, function timeout() { 
            // I'm disappointed in you.
            this.echo("Ohhh noOoOoOoooooo").exit();
            this.capture('extrabux-homepage-locale-switcher.png')
        }
    }).run(function() {
        // That's Some Pig
        this.captureSelector('extrabux-homepage-locale-switcher-functional.png', 
        '.locale-switcher', {
                format: 'png',
                quality: 80
            }
        );
        test.done();
    });
});


