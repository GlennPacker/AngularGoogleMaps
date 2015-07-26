﻿using System.Web.Mvc;

namespace AngularGoogleMaps.Web.Controllers
{
    public class AngularController : Controller
    {
        public ActionResult Index()
        {
            return View("Index");
        }
        
        public ActionResult BasicMap()
        {
            return View();
        }

        public ActionResult GeoCode()
        {
            return View();
        }
    }
}