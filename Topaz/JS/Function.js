
function onSign()
{
  var tmr;
  if(IsSigWebInstalled()){
    var ctx = document.getElementById('cnv').getContext('2d');
    SetDisplayXSize( 500 );//width of sign
    SetDisplayYSize( 100 );//height of sign 
    SetTabletState(0, tmr);//disable signature of canvas
    SetJustifyMode(0);//Justification (default)
    ClearTablet();//clear object
    SetKeyString("0000000000000000");//key sig
    SetEncryptionMode(0);//no encryption
    if(tmr == null)
    {
      tmr = SetTabletState(1, ctx, 50);//espace,context,time.
    }
    else
    {
      tmr = null;
      SetTabletState(0, tmr);//disabled 
      tmr = SetTabletState(1, ctx, 50);//active
    }
  } else{
    alert("Ha ocurrido un error, por favor verifica la installación del sigweb");
  }
}

function onClear()
{
  ClearTablet();//clear object
}

function converterFormat()
{
  if(NumberOfTabletPoints() == 0)//return points of signature
  {
    alert("Por favor realice la firma antes de continuar");
  }
  else
  {
    var tmr;
    SetTabletState(0, tmr); //disabled connection
    SetEncryptionMode(2);// Higher-security
    SetSigCompressionMode(1);//Lossless 4-1
    document.FORMSIG.bioSigData.value=GetSigString();
    document.FORMSIG.sigStringData.value = GetSigString();
    SetImageXSize(500);
    SetImageYSize(100);
    SetImagePenWidth(5);
    GetSigImageB64(SigImageCallback);
  }
}

function SigImageCallback( str )
{
  document.FORMSIG.sigImageData.value = str;//obtain img of sig
  document.FORMSIG.firma.src="data:image/jpeg;base64,"+str;
}