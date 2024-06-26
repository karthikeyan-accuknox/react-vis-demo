export const data = {
  nodes: [
    {
      id: 1,
      type: "parent",
      data: {
        updated_time: 1715842039,
        cluster_id: 6997,
      },
      workload: {},
    },
    {
      id: 2,
      type: "child",
      data: {
        updated_time: 1715842039,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "3.134.232.227",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 3,
      type: "child",
      data: {
        updated_time: 1717128040,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "3.140.139.52",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 4,
      type: "child",
      data: {
        updated_time: 1715841934,
        namespace: "accuknox-agents",
        source: "/Feeder/node-event-feeder",
        ip: "18.189.168.206",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "feeder-service",
      },
    },
    {
      id: 5,
      type: "child",
      data: {
        updated_time: 1715746717,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "10.0.0.41",
        port: 9090,
        nw_type: "ingress",
        protocol: "TCPv6",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 6,
      type: "child",
      data: {
        updated_time: 1715746711,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "3.134.141.18",
        port: 443,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
    {
      id: 7,
      type: "child",
      data: {
        updated_time: 1715689229,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "10.0.0.127",
        port: 9091,
        nw_type: "ingress",
        protocol: "TCPv6",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 8,
      type: "child",
      data: {
        updated_time: 1716788458,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "18.222.43.98",
        port: 443,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
    {
      id: 9,
      type: "child",
      data: {
        updated_time: 1716788458,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "3.13.152.2",
        port: 443,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
    {
      id: 10,
      type: "child",
      data: {
        updated_time: 1715746616,
        namespace: "accuknox-agents",
        source: "/SIA/sia",
        ip: "13.58.137.181",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "shared-informer-agent",
      },
    },
    {
      id: 11,
      type: "child",
      data: {
        updated_time: 1715746655,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "3.132.125.21",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 12,
      type: "child",
      data: {
        updated_time: 1716787679,
        namespace: "accuknox-agents",
        source: "/Feeder/node-event-feeder",
        ip: "3.140.20.162",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "feeder-service",
      },
    },
    {
      id: 13,
      type: "child",
      data: {
        updated_time: 1716788104,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "18.222.53.216",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 14,
      type: "child",
      data: {
        updated_time: 1715746715,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "18.190.171.36",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 15,
      type: "child",
      data: {
        updated_time: 1715685328,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "10.0.0.162",
        port: 9091,
        nw_type: "ingress",
        protocol: "TCPv6",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 16,
      type: "child",
      data: {
        updated_time: 1716788276,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "18.189.204.30",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 17,
      type: "child",
      data: {
        updated_time: 1715776011,
        namespace: "multiubuntu",
        source: "/usr/bin/curl",
        ip: "142.250.194.36",
        port: 80,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "metrics-server",
      },
    },
    {
      id: 18,
      type: "child",
      data: {
        updated_time: 1715685664,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "10.0.0.42",
        port: 9091,
        nw_type: "ingress",
        protocol: "TCPv6",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 19,
      type: "child",
      data: {
        updated_time: 1716788111,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "18.190.11.226",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 20,
      type: "child",
      data: {
        updated_time: 1716787859,
        namespace: "accuknox-agents",
        source: "/Feeder/node-event-feeder",
        ip: "18.190.136.247",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "feeder-service",
      },
    },
    {
      id: 21,
      type: "child",
      data: {
        updated_time: 1716787745,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "3.137.67.67",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
    {
      id: 22,
      type: "child",
      data: {
        updated_time: 1715746716,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "3.20.18.97",
        port: 443,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
    {
      id: 23,
      type: "child",
      data: {
        updated_time: 1715746616,
        namespace: "accuknox-agents",
        source: "/agents-operator/main",
        ip: "3.22.220.241",
        port: 8081,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "agents-operator",
      },
    },
    {
      id: 24,
      type: "child",
      data: {
        updated_time: 1715745915,
        namespace: "accuknox-agents",
        source: "/SIA/sia",
        ip: "3.14.212.239",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "shared-informer-agent",
      },
    },
    {
      id: 25,
      type: "child",
      data: {
        updated_time: 1715746376,
        namespace: "accuknox-agents",
        source: "/SIA/sia",
        ip: "18.221.59.3",
        port: 3000,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "shared-informer-agent",
      },
    },
    {
      id: 26,
      type: "child",
      data: {
        updated_time: 1716788453,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "3.15.133.183",
        port: 443,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
    {
      id: 27,
      type: "child",
      data: {
        updated_time: 1715746706,
        namespace: "accuknox-agents",
        source: "/PEA/pea",
        ip: "18.220.73.166",
        port: 443,
        nw_type: "egress",
        protocol: "TCP",
        action: "Allow",
        cluster_id: 6997,
      },
      workload: {
        type: "Deployment",
        name: "policy-enforcement-agent",
      },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: 1,
      target: 2,
      label: "",
      data: {
        ip: "3.134.232.227",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715842039,
      },
    },
    {
      id: "e1-3",
      source: 1,
      target: 3,
      label: "",
      data: {
        ip: "3.140.139.52",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1717128040,
      },
    },
    {
      id: "e1-4",
      source: 1,
      target: 4,
      label: "",
      data: {
        ip: "18.189.168.206",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715841934,
      },
    },
    {
      id: "e5-1",
      source: 5,
      target: 1,
      label: "",
      data: {
        ip: "10.0.0.41",
        protocol: "TCPv6",
        port: 9090,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746717,
      },
    },
    {
      id: "e1-6",
      source: 1,
      target: 6,
      label: "",
      data: {
        ip: "3.134.141.18",
        protocol: "TCP",
        port: 443,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746711,
      },
    },
    {
      id: "e7-1",
      source: 7,
      target: 1,
      label: "",
      data: {
        ip: "10.0.0.127",
        protocol: "TCPv6",
        port: 9091,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715689229,
      },
    },
    {
      id: "e1-8",
      source: 1,
      target: 8,
      label: "",
      data: {
        ip: "18.222.43.98",
        protocol: "TCP",
        port: 443,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716788458,
      },
    },
    {
      id: "e1-9",
      source: 1,
      target: 9,
      label: "",
      data: {
        ip: "3.13.152.2",
        protocol: "TCP",
        port: 443,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716788458,
      },
    },
    {
      id: "e1-10",
      source: 1,
      target: 10,
      label: "",
      data: {
        ip: "13.58.137.181",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746616,
      },
    },
    {
      id: "e1-11",
      source: 1,
      target: 11,
      label: "",
      data: {
        ip: "3.132.125.21",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746655,
      },
    },
    {
      id: "e1-12",
      source: 1,
      target: 12,
      label: "",
      data: {
        ip: "3.140.20.162",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716787679,
      },
    },
    {
      id: "e1-13",
      source: 1,
      target: 13,
      label: "",
      data: {
        ip: "18.222.53.216",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716788104,
      },
    },
    {
      id: "e1-14",
      source: 1,
      target: 14,
      label: "",
      data: {
        ip: "18.190.171.36",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746715,
      },
    },
    {
      id: "e15-1",
      source: 15,
      target: 1,
      label: "",
      data: {
        ip: "10.0.0.162",
        protocol: "TCPv6",
        port: 9091,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715685328,
      },
    },
    {
      id: "e1-16",
      source: 1,
      target: 16,
      label: "",
      data: {
        ip: "18.189.204.30",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716788276,
      },
    },
    {
      id: "e1-17",
      source: 1,
      target: 17,
      label: "",
      data: {
        ip: "142.250.194.36",
        protocol: "TCP",
        port: 80,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715776011,
      },
    },
    {
      id: "e18-1",
      source: 18,
      target: 1,
      label: "",
      data: {
        ip: "10.0.0.42",
        protocol: "TCPv6",
        port: 9091,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715685664,
      },
    },
    {
      id: "e1-19",
      source: 1,
      target: 19,
      label: "",
      data: {
        ip: "18.190.11.226",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716788111,
      },
    },
    {
      id: "e1-20",
      source: 1,
      target: 20,
      label: "",
      data: {
        ip: "18.190.136.247",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716787859,
      },
    },
    {
      id: "e1-21",
      source: 1,
      target: 21,
      label: "",
      data: {
        ip: "3.137.67.67",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716787745,
      },
    },
    {
      id: "e1-22",
      source: 1,
      target: 22,
      label: "",
      data: {
        ip: "3.20.18.97",
        protocol: "TCP",
        port: 443,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746716,
      },
    },
    {
      id: "e1-23",
      source: 1,
      target: 23,
      label: "",
      data: {
        ip: "3.22.220.241",
        protocol: "TCP",
        port: 8081,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746616,
      },
    },
    {
      id: "e1-24",
      source: 1,
      target: 24,
      label: "",
      data: {
        ip: "3.14.212.239",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715745915,
      },
    },
    {
      id: "e1-25",
      source: 1,
      target: 25,
      label: "",
      data: {
        ip: "18.221.59.3",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746376,
      },
    },
    {
      id: "e1-26",
      source: 1,
      target: 26,
      label: "",
      data: {
        ip: "3.15.133.183",
        protocol: "TCP",
        port: 443,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1716788453,
      },
    },
    {
      id: "e1-27",
      source: 1,
      target: 27,
      label: "",
      data: {
        ip: "18.220.73.166",
        protocol: "TCP",
        port: 443,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "Allow",
        updated_time: 1715746706,
      },
    },
  ],
};