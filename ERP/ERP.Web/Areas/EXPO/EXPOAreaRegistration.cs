using System.Web.Mvc;

namespace ERP.Web.Areas.EXPO
{
    public class EXPOAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "EXPO";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "EXPO_default",
                "EXPO/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}