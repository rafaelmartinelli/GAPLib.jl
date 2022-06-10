var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = AssignmentProblems","category":"page"},{"location":"#AssignmentProblems.jl","page":"Home","title":"AssignmentProblems.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"AssignmentProblems reads data files in gap format for Generalized Assignmnent Problem (GAP) instances.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The main type used by the package is AssignmentProblem, defined as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"struct AssignmentProblem\n    name::String                # Instance name\n\n    capacities::Vector{Int64}   # Agents' capacities\n    costs::Matrix{Int64}        # Assigments costs (agents x jobs)\n    consumptions::Matrix{Int64} # Assigments consumptions (agents x jobs)\n\n    lb::Int64                   # Lower bound (typemin(Int64) if not known)\n    ub::Int64                   # Upper bound (typemax(Int64) if not known)\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"The package also defines the functions na and nj returning the number of agents and jobs, respectively.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some classical GAP instances from the literature are preloaded. For example, to load GAP instance a05100:","category":"page"},{"location":"","page":"Home","title":"Home","text":"data = loadAssignmentProblem(:a05100)","category":"page"},{"location":"","page":"Home","title":"Home","text":"There is a second optional parameter to set the objective function used (default :Min or :Max). This is only used to populate lb and ub fields.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the full instance list.","category":"page"},{"location":"","page":"Home","title":"Home","text":"AssignmentProblems also loads custom GAP instances (following ORLib format):","category":"page"},{"location":"","page":"Home","title":"Home","text":"data = loadAssignmentProblem(\"/path/to/your/GAP/instance.txt\")","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"AssignmentProblems is not yet a registered Julia Package. You can install AssignmentProblems through the Julia package manager. Open Julia's interactive session (REPL) and type:","category":"page"},{"location":"","page":"Home","title":"Home","text":"] add https://github.com/rafaelmartinelli/AssignmentProblems.jl","category":"page"},{"location":"#Related-links","page":"Home","title":"Related links","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Mutsunori Yagiura's GAP Page\nORLib's GAP page","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [AssignmentProblems]","category":"page"}]
}
