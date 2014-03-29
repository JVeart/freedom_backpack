	<footer>
            <script>
                $( ".mail_link" ).click(function(e) {
                    slide_left();
                    
                    e.preventDefault();
                    
                    var that  = this;
                    $.ajax({
                    // url: '/confirmed/',
                    type: 'POST',
                    data: {
                        event_type: $(that).data('ev')
                        
                    },
                        success: function(result) {
                            
                            $(".mail_link").hide();
                            $(".back_landing").show();
                            //$(that).find('a').attr("", "");
                        }
                    });
                });
 
            $( ".back_landing" ).click(function(e) {
                    slide_right();
                    
                    e.preventDefault();
                    
                    var that2  = this;
                    $.ajax({
                    type: 'POST',
                    data: {
                        event_type: $(that2).data('ev')
                        
                    },
                        success: function(result) {
                            $(".mail_link").show();
                            $(".back_landing").hide();
                            //$(that).find('a').attr("", "");
                        }
                    });
                });
            </script>
        </footer>
    </body>
</html>