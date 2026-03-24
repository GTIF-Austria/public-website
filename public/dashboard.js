function isMobile() {
  // only on app start but good for now
  const minWidth = 768;
  return window.innerWidth < minWidth || screen.width < minWidth;
}

const itemFilterConfig = {
  resultType: "cards",
  subTitleProperty: "subtitle",
  aggregateResults: "collection_group",
  filterProperties: [
    {
      keys: ["title", "description"],
      title: "Search",
      type: "text",
      placeholder: "Type to search...",
      expanded: true,
    },
    {
      key: "collection_group",
      title: "Topic",
      type: "multiselect",
      expanded: true,
      placeholder: "Type to search...",
      inline: false,
    }
  ],
  imageProperty: "thumbnail",
  style: isMobile() ?
  {
    "--form-flex-direction": "row",
    "--filter-display": "none"
  }:
  {
    "--form-flex-direction": "row",
    "--select-filter-max-items": 10,
  },
};

export default {
  id: "GTIF-Austria Dashboard",
  stacEndpoint:
    "https://gtif-austria.github.io/public-catalog/GTIF-Austria/catalog.json",
  brand: {
    noLayout: true,
    name: "GTIF-Austria Dashboard",
    theme: {
      colors: {
        primary: "#fff",
        secondary: "#fff",
        surface: "#fff",
      },
    },
    footerText: "GTIF-Austria Dashboard",
  },
  templates: {
    light: {
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: {
                itemFilterConfig,
              },
              enableSearch: true,
              searchParams: {
                countrycode: "at",
              },
              enableBackToPOIs: true,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            },
            center: [13.3587, 47.4706],
            zoom: 7,
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              indicatorBtnText: "Select capability",
              showLayoutSwitcher: false,
              itemFilterConfig,
            },
          },
        },
        {
          id: "Layers",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 6 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              cssVars: {
                "--list-padding": "1rem",
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      body: ["description"],
                      featured: ["providers", "assets"],
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 5 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 12, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-compare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: {
                fallbackTemplate: "light",
              },
              enableBackToPOIs: false,
              enableSearch: true,
              searchParams: {
                countrycode: "at",
              },
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig,
            },
          },
        },
        // compare indicators
        {
          id: "Compare Indicators Tools",
          type: "internal",
          title: "Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select compare indicator",
              itemFilterConfig: {
                ...itemFilterConfig,
                enableCompare: true,
                filtersTitle: "Select an indicator to compare",
              },
            },
          },
        },
        {
          id: "Layers",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 6 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          id: "Layers Compare",
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 6 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: 0, y: 7, w: "3/3/2", h: 5 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        {
          defineWidget: (_, updatedCompareStac) =>
            window.eodashStore.actions.includesProcess(updatedCompareStac, true) && {
              id: "CompareMapProcess",
              type: "internal",
              title: "Processes",
              layout: { x: "9/9/10", y: 7, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget(true) && {
              id: "ProcessResultChartCompare",
              type: "internal",
              title: "Compare Chart",
              layout: { x: 6, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
      ],
    },
  },
};
