
const apiRequest = async (url = '' , optionsObj = null , errMsg = null ) => {

try
{
   const response = await fetch(url, optionsObj);
   if(!response.ok) throw Error('Please reload the app'); 

}
catch (err) 
{
    errMsg =   err.message;

}
finally
{
    return errMsg;
}

}

export default apiRequest;


/* 
//function structure
const functionName = async (p1 = '' , p2 = '', ...) => {
  try
    {
    
    }
    catch (err) 
    {
    
    }
    finally
    {
        
    }
    
    }
    export default functionName;
    */