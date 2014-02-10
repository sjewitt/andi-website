//data:
var imgs = new Array();
imgs.push("BLANK");
imgs.push("1.jpg");
imgs.push("2.jpg");
imgs.push("3.jpg");
imgs.push("4.jpg");
imgs.push("5.jpg");
imgs.push("6.jpg");
imgs.push("7.jpg");
imgs.push("8.jpg");
imgs.push("9.jpg");
imgs.push("10.jpg");
imgs.push("11.jpg");
imgs.push("12.jpg");
imgs.push("13.jpg");
imgs.push("14.jpg");
imgs.push("15.jpg");
imgs.push("16.jpg");
imgs.push("17.jpg");
imgs.push("18.jpg");

function rollover(elem,state)
{
    try
    {
        if(document.images)
        {
            //alert("calling method...")
            var base = "/images/";

            var graphic_head1_off   = new Image();
            var graphic_head2_off   = new Image();
            var graphic_head3_off   = new Image();
            var graphic_head4_off   = new Image();
            var graphic_head1_on    = new Image();
            var graphic_head2_on    = new Image();
            var graphic_head3_on    = new Image();
            var graphic_head4_on    = new Image();
            
            graphic_head1_off.src   = base + "presenter_off.jpg";
            graphic_head2_off.src   = base + "singer_off.jpg";
            graphic_head3_off.src   = base + "actor_off.jpg";
            graphic_head4_off.src   = base + "model_off.jpg";
            graphic_head1_on.src    = base + "presenter_on.jpg";
            graphic_head2_on.src    = base + "singer_on.jpg";
            graphic_head3_on.src    = base + "actor_on.jpg";
            graphic_head4_on.src    = base + "model_on.jpg";
            
            var imgs = new Object();
            imgs["graphic_head1"] = {on:graphic_head1_on,   off:graphic_head1_off};
            imgs["graphic_head2"] = {on:graphic_head2_on,   off:graphic_head2_off};
            imgs["graphic_head3"] = {on:graphic_head3_on,   off:graphic_head3_off};
            imgs["graphic_head4"] = {on:graphic_head4_on,   off:graphic_head4_off};

            document.images[elem.id].src = imgs[elem.id][state].src;
        }
    }
    
    catch(e)
    {
        
    }
}


function showImage(id)
{
    try
    {
        var img = "1.jpg";  //default to this
        var src = "/gallery.htm?img=" + imgs[parseInt(id)];
        var w = window.open(src,"gallery","left=20,top=20,width=490,height=655,toolbar=0,resizable=0")
        w.focus();
        //return false;
    }
    
    catch(e)
    {
        alert(e.message)
        //return false;
    }
}

function nextImage()
{
    try
    {
        var out = '<a href="/gallery.htm?img=';
        
        var imgId = parseInt(window.location.toString().split("?img=")[1].split(".")[0]) + 1;
        if(imgId>imgs.length-1)
        {
            imgId = 1;
        }
        
        out += imgId + '.jpg" title="Next image" />Next</a>';
        document.write(out);
    }
    catch(e)
    {
        alert("err")
    }
}

function prevImage()
{
    try
    {
        var out = '<a href="/gallery.htm?img=';
        
        var imgId = parseInt(window.location.toString().split("?img=")[1].split(".")[0]) - 1;
        if(imgId<=0)
        {
            imgId = imgs.length-1;
        }
        
        out += imgId + '.jpg" title="Previous image" />Back</a>';
        document.write(out);
    }
    catch(e)
    {
        alert("err")
    }
}

function displayImageTag()
{
    try
    {
        //get the image:
        var out = "";
        var location = window.location.toString();

        if(location.indexOf("?img=") != -1)
        {
            out = "<img src=\"/images/gallery/" + location.split("?img=")[1] + "\" alt=\"Gallery image\" class=\"center_img\" />"
        }
        document.write(out);
    }
    
    catch(e)
    {
    }
}

//content nav:
function getContentNav(loc)
{
    try
    {
        var outputArray = new Array();
        var dataArray   = new Array();
        dataArray[0] = new Object();
        dataArray[1] = new Object();
        dataArray[2] = new Object();
        dataArray[3] = new Object();
        
        dataArray[0].name = 'presenter';
        dataArray[0].off  = '<a href="/presenter.shtml" title="Presenter"><img alt="Presenter" id="graphic_head1" onMouseOver="rollover(this,\'on\');" onMouseOut="rollover(this,\'off\');" src="/images/presenter_off.jpg" /></a>';
        dataArray[0].on   = '<img alt="Presenter" id="graphic_head1" src="/images/presenter_on.jpg" />';
        
        dataArray[1].name = 'singer';
        dataArray[1].off  = '<a href="/singer.shtml" title="Singer"><img alt="Singer" id="graphic_head2" onMouseOver="rollover(this,\'on\');" onMouseOut="rollover(this,\'off\');" src="/images/singer_off.jpg" /></a>';
        dataArray[1].on   = '<img alt="Singer" id="graphic_head2" src="/images/singer_on.jpg" />';
        
        dataArray[2].name = 'actor';
        dataArray[2].off  = '<a href="/actor.shtml" title="Actor"><img alt="Actor" id="graphic_head3" onMouseOver="rollover(this,\'on\');" onMouseOut="rollover(this,\'off\');" src="/images/actor_off.jpg" /></a>';
        dataArray[2].on   = '<img alt="Actor" id="graphic_head3" src="/images/actor_on.jpg" />';
        
        dataArray[3].name = 'model';
        dataArray[3].off  = '<a href="/model.shtml" title="Model"><img alt="Model" id="graphic_head4" onMouseOver="rollover(this,\'on\');" onMouseOut="rollover(this,\'off\');" src="/images/model_off.jpg" /></a>';
        dataArray[3].on   = '<img alt="Model" id="graphic_head4" src="/images/model_on.jpg" />';
        
        var arr = loc.toString().split(".shtml")[0].split("/");
        
        for(var a=0;a<dataArray.length;a++)
        {
            outputArray[a] = dataArray[a].off;
            //alert(arr[arr.length-1] ," ", dataArray[a].name)
            if(arr[arr.length-1] == dataArray[a].name)
            {
                //over-ride if on current page:
                switch(arr[arr.length-1])
                {
                    case 'presenter':
                        outputArray[a] = dataArray[a].on;
                    break;
                    
                    case 'singer':
                        outputArray[a] = dataArray[a].on;
                    break;
                    
                    case 'actor':
                        outputArray[a] = dataArray[a].on;
                    break;
                    
                    case 'model':
                        outputArray[a] = dataArray[a].on;
                    break;
                }
            }
            
            outputArray[a] = '<span class="graphic_link">' + outputArray[a] + '</span>\n';
        }
        
        return(outputArray.join(""));
    }
    catch(e)
    {
       alert(e.message);
    }
}
