using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularGoogleMaps.Web.Startup))]
namespace AngularGoogleMaps.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
