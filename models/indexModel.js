var indexModel = can.Model({

        getSomeData: function(attrs, success,error) { // campaigns shown for campaigns page in organization dashboard

            $.ajax({
                url: 'https://wonderwe.com/pages/trending/campains',
                type: 'get',
                success: success,
                error:error
            });
        }
    },

    {

    });
