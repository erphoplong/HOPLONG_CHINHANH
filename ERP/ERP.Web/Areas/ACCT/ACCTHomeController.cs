using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ERP.Web.Areas.ACCT
{
    public class ACCTHomeController : Controller
    {
        // GET: ACCT/ACCTHome
        public ActionResult Index()
        {
            return View();
        }
    }
}