using System.Web.Mvc;

namespace ERP.Web.Areas.MARK
{
    public class MARKAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MARK";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MARK_default",
                "MARK/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}