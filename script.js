$("document").ready(function() {

    var checkTcNum = function(value) {
      value = value.toString();
      var  kural1 = /^[0-9]{11}$/.test(value);
      var totalX = 0;
      for (var i = 0; i < 10; i++) {
        totalX += Number(value.substr(i, 1));
      }
      var kural2 = totalX % 10 == value.substr(10,1);
      var totalY1 = 0;
      var totalY2 = 0;
      for (var i = 0; i < 10; i+=2) {
        totalY1 += Number(value.substr(i, 1));
      }
      for (var i = 1; i < 10; i+=2) {
        totalY2 += Number(value.substr(i, 1));
      }
      var kural3 = ((totalY1 * 7) - totalY2) % 10 == value.substr(9,0);
      return kural3 && kural1 && kural2;
    };

    var checkVergiNo = function(value) {
        value = value.toString();
        var  kural1 = /^[0-9]{10}$/.test(value);
        var totalX = 0;
        var kural2=true;
        var kural3=false;
        var totalNum=0;
        var totalNine=0;
        var lastNum=0;
        var kontrol=0;
        for (var i = 0; i < 10; i++) {
           kontrol=(Number(value.substr(i, 1))+10-(i+1))%10;
            totalNine+=kontrol;
        }
        
        if(totalNine!=90){
            kural2=false;
        }
        
        

        if(kural2==false){

            for (var i = 0; i < 9; i++) {
                var kontrol=(Number(value.substr(i, 1))+10-(i+1))%10;
                if(kontrol!=9){
                  kontrol=((Number(value.substr(i, 1))+10-(i+1))%10)*Math.pow(2,10-(i+1))%9;
                }
                
                totalNum+=kontrol;
            }
            lastNum=(10-(totalNum%10))%10;


            if(lastNum==Number(value.substr(9, 1))){
                kural3=true;
            }

        }
       if(kural2==true){
           return kural1 && kural2;
       }
       else{

        return kural1 && kural3;

       }
      };
  


    $('#vergi_no').on('keyup focus blur load', function(event) {
      event.preventDefault();
      var isValid = checkVergiNo($(this).val());
      console.log(isValid);
      if (isValid) {
        $('#text_vergi').text("Geçerli vergi no").attr('class', ' text-success');
      }
      else {
        $('#text_vergi').text("Geçersiz vergi no").attr('class', 'text-danger');
      }
    });
    
    $('#tc').on('keyup focus blur load', function(event) {
        event.preventDefault();
        var isValid = checkTcNum($(this).val());
        console.log(isValid);
        if (isValid) {
          $('#text_tc').text("Geçerli kimlik no").attr('class', ' text-success');
        }
        else {
          $('#text_tc').text("Geçersiz kimlik no").attr('class', 'text-danger');
        }
      });
  }); //document.ready