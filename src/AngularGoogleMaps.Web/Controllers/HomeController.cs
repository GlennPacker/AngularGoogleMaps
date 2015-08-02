using System.Web.Mvc;

namespace AngularGoogleMaps.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("Index");
        }
                
        public ActionResult BasicMap()
        {
            return View("BasicMap");
        }

        public ActionResult BaseMapOptions()
        {
            return View("BaseMapOptions");
        }

        public ActionResult MapControl()
        {
            return View("MapControl");
        }

        public ActionResult Marker()
        {
            return View("Marker");
        }

        public ActionResult PolyLine()
        {
            return View("PolyLine");
        }

        public ActionResult Polygon()
        {
            return View("Polygon");
        }

        public ActionResult GeoCode()
        {
            return View("Geocode");
        }
    }
}