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
        id: "background-map-light",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: false,
              enableSearch: false,
            },
            btnsPosition: {
              x: "12/9/9",
              y: 2,
              gap: 32
            },
            center: [13.3587, 47.4706],
            zoom: 7,
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: 3, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              indicatorBtnText: "Select dataset",
              layoutTarget: "expert",
              layoutIcon:
                "M2,5V19H8V5H2M9,5V10H15V5H9M16,5V14H22V5H16M9,11V19H15V11H9M16,15V19H22V15H16Z",
              itemFilterConfig: {
                resultType: "cards",
                filtersTitle: "",
                style: "--padding: 72px",
                filterProperties: [],
                resultsTitle: "Explore more indicators",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "layercontrol-light",
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: 3, h: 9 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      slider: false,
                      tools: ["datetime", "info", "legend", "config"],
                      cssVars: {
                        "--list-padding": "0",
                        "--tools-button-visibility": "none",
                        "--layer-input-visibility": "none",
                        "--layer-type-visibility": "none",
                        "--padding": "16px",
                        "--padding-vertical": "16px",
                        "--layer-tools-button-visibility": "none",
                        "--layer-summary-visibility": "none",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "stacinfo-light",
                  type: "internal",
                  title: "Information",
                  layout: { x: 9, y: 0, w: 3, h: 6 },
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      tags: [],
                      header: ["title"],
                      footer: [],
                      body: ["description"],
                      styleOverride: "",
                      featured: [],
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                              on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            selectedSTAC?.links.some((l) => l.rel === "service")
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: 9, y: 6, w: 3, h: 5 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
      ],
    },
    expert: {
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
        id: "background-map-expert",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: false,
              enableBackToPOIs: true,
            },
            btnsPosition: {
              x: "12/9/9",
              y: 2,
              gap: 32
            },
            center: [13.3587, 47.4706],
            zoom: 7,
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: 3, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              indicatorBtnText: "Select dataset",
              layoutTarget: "light",
              layoutIcon:
                "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig: {
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                aggregateResults: "collection_group",
                style: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: 3, h: 6 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: 9, y: 0, w: 3, h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                    properties: {
                      showIndicatorsBtn: false,
                      showLayoutSwitcher: false,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                              on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            selectedSTAC?.links.some((l) => l.rel === "service")
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: 9, y: 6, w: 3, h: 5 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
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
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            btnsPosition: {
              x: "12/9/9",
              y: 2,
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
          layout: { x: 0, y: 0, w: 3, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "expert",
              layoutIcon:
                "M2,5V19H8V5H2M9,5V10H15V5H9M16,5V14H22V5H16M9,11V19H15V11H9M16,15V19H22V15H16Z",
              itemFilterConfig: {
                cssVars: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: "Compare Indicators Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 9, y: 0, w: 3, h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select an indicator to compare",
              itemFilterConfig: {
                enableCompare: true,
                // resultsTitle:"Select an indicator to compare",
                filtersTitle: "Select an indicator to compare",
                // filterProperties: [],
                cssVars: {
                  "--form-flex-direction": "row",
                },
              },
            },
          },
        },
        {
          id: "Layers",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: 3, h: 6 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: "Layers Compare",
          title: "Comparison Layers",
          layout: { x: 9, y: 1, w: 3, h: 6 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
            },
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            selectedSTAC?.links.some((l) => l.rel === "service")
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: 0, y: 7, w: 3, h: 5 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 5, y: 8, w: 2, h: 4 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                  on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
};
