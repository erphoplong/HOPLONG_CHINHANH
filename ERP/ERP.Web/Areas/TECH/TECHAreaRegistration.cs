using System.Web.Mvc;

namespace ERP.Web.Areas.TECH
{
    public class TECHAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TECH";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TECH_default",
                "TECH/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}