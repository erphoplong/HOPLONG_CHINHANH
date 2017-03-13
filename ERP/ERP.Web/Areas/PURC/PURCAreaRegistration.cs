using System.Web.Mvc;

namespace ERP.Web.Areas.PURC
{
    public class PURCAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "PURC";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "PURC_default",
                "PURC/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}