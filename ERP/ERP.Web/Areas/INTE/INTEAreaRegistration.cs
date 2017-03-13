using System.Web.Mvc;

namespace ERP.Web.Areas.INTE
{
    public class INTEAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "INTE";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "INTE_default",
                "INTE/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}