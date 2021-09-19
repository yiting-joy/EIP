using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace index.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View();

        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult overtime()
        {

            return View();
        }

        public ActionResult dayoff3()
        {

            return View();
        }
        public ActionResult clockcheck()
        {

            return View();
        }
        public ActionResult clockin()
        {

            return View();
        }
        public ActionResult check()
        {

            return View();
        }
        public ActionResult bosscheck()
        {

            return View();
        }
        public ActionResult homepage()
        {

            return View();
        }
        public ActionResult erropage()
        {

            return View();
        }
    }
}