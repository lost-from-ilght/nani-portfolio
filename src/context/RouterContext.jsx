import React, { createContext, useContext, useState, useEffect } from "react";
import { projects, personalInfo } from "../data/portfolioData";

const RouterContext = createContext();

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};

const parseRouteFromLocation = () => {
  if (typeof window === "undefined") {
    return { type: "home", projectId: null };
  }

  const hash = window.location.hash || "";
  const pathname = window.location.pathname || "";
  const searchParams = new URLSearchParams(window.location.search || "");

  // 1. Check Query parameter: ?project=hackathon-vlog
  const projectParam = searchParams.get("project");
  if (projectParam && projects.some((p) => p.id === projectParam)) {
    return { type: "project", projectId: projectParam };
  }

  // 2. Check Hash route: #/project/hackathon-vlog or #project/hackathon-vlog
  if (hash.startsWith("#/project/") || hash.startsWith("#project/")) {
    const rawId = hash.replace(/^#\/?project\//, "").split(/[?#&/]/)[0];
    if (rawId && projects.some((p) => p.id === rawId)) {
      return { type: "project", projectId: rawId };
    }
  }

  // 3. Check Pathname: /project/:id
  const match = pathname.match(/\/project\/([a-zA-Z0-9_-]+)/);
  if (match && match[1] && projects.some((p) => p.id === match[1])) {
    return { type: "project", projectId: match[1] };
  }

  return { type: "home", projectId: null };
};

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState(parseRouteFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      const newRoute = parseRouteFromLocation();
      setRoute(newRoute);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Update document title dynamically
  useEffect(() => {
    if (route.type === "project" && route.projectId) {
      const proj = projects.find((p) => p.id === route.projectId);
      if (proj) {
        document.title = `${proj.title} — Melat Zenebe (Nani)`;
      }
    } else {
      document.title = "Melat Zenebe (Nani) | Video Editor & Visual Storyteller";
    }
  }, [route]);

  const navigateToProject = (projectId) => {
    const targetProject = projects.find((p) => p.id === projectId);
    if (!targetProject) return;

    window.history.pushState(
      { projectId },
      "",
      `#/project/${projectId}`
    );
    setRoute({ type: "project", projectId });
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const navigateToHome = (sectionId = null) => {
    window.history.pushState(
      null,
      "",
      sectionId ? `#${sectionId}` : "#"
    );
    setRoute({ type: "home", projectId: null });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const value = {
    isProjectView: route.type === "project",
    currentProjectId: route.projectId,
    navigateToProject,
    navigateToHome,
  };

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};
