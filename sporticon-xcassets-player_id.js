const fs = require('fs-extra'),
      SvgFill = require('svg-fill').default,
      colors = require('colors'),
      rsvg = require('librsvg').Rsvg,
      xcassetsFormat = {
        Sport: 24,
        LargeSport: 48,
        ExtraLargeSport: 128
      };

fs.readFile('website/_data/sporticon_definitions.json', function (error, data) {
    if (error) {
        console.log(colors.red('ERROR: ' + error));
        return;
    }

    function isEmpty(str) {
      return (!str || 0 === str.length);
    }

    const obj = JSON.parse(data);
    const whiteFill = new SvgFill('#fff');

    for (const i in Object.keys(xcassetsFormat)) {
      Object.keys(obj).forEach(key => {

          let _from = `${__dirname}/src/build/svg/${obj[key].id}.svg`;
          let _to = `${__dirname}/src/build/Images.xcassets/sports/${Object.keys(xcassetsFormat)[i]}${obj[key].player_id}.imageset/${Object.keys(xcassetsFormat)[i]}${obj[key].player_id}.pdf`;
          if (!isEmpty(`${obj[key].player_id}`)) {
            var svg = new rsvg();

            svg.on('finish', function() {
              fs.outputFile(_to, svg.render({
                format: 'pdf',
                width: `${Object.values(xcassetsFormat)[i]}`,
                height: `${Object.values(xcassetsFormat)[i]}`
              }).data, function (err) {
                console.log(colors.green('PROCESSED: ' + _from, ' -> ', _to));
                if (err){
                    console.log(colors.red('ERROR: ' + err));
                };
              });
            });

            fs.createReadStream(_from).pipe(whiteFill.fillSvgStream()).pipe(svg);
          } else {
            console.log(colors.grey('SKIPPED: ' + _from));
          };

      });
    };
});
