using System.Web.Mvc;

namespace ERP.Web.Areas.WALO
{
    public class WALOAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "WALO";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "WALO_default",
                "WALO/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}