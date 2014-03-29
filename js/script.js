jQuery(function()
{
    home_section = jQuery('#home');
    
    jQuery('.mail_link').click(function()
    {
        var target = jQuery(this);
        var is_desc = home_section.is('.description');
        home_section.toggleClass('description', !is_desc ).toggleClass('contacts', is_desc);
        target.toggleClass('active', is_desc );
        
        return false;    
    });   
});