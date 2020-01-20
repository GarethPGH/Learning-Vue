using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class helpers
    {
        public static IHtmlString LoadFile(string webpath)
        {
            HtmlString returnContent = new HtmlString("");

            if (!string.IsNullOrWhiteSpace(webpath))
            {
                string filepath = System.Web.Hosting.HostingEnvironment.MapPath(webpath);
                if (File.Exists(filepath))
                {
                    string content = File.ReadAllText(filepath);
                    if (!string.IsNullOrWhiteSpace(content))
                    {
                        returnContent = new HtmlString(content);
                    }
                }
            }
            return returnContent;
        }
    }
}