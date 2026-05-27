import { IFirmRepository } from '../../domain/repositories';
import { FirmOverview } from '../../domain/entities';

export class MockFirmRepository implements IFirmRepository {
  async getOverview(): Promise<FirmOverview> {
    return {
      title: "Samrat Juris",
      subtitle: "Law • Strategy • Resolution",
      description: "Samrat Juris is a modern, agile Indian law firm engineered for the pace of the new economy. With strategic hubs in Hyderabad and Delhi, we deliver high-caliber legal representation across a wide spectrum of corporate, civil, and personal law. We are built on a simple premise: complex legal challenges require more than just textbook knowledge; they demand tactical foresight, commercial pragmatism, and decisive action.",
      pillars: [
        {
          id: "pillar-1",
          title: "Law",
          description: "Rigorous, foundational legal counsel that protects your rights, assets, and business interests in a rapidly shifting regulatory landscape."
        },
        {
          id: "pillar-2",
          title: "Strategy",
          description: "Forward-thinking structuring for startups, real estate developments, and private wealth, designed to preempt risks and maximize value."
        },
        {
          id: "pillar-3",
          title: "Resolution",
          description: "Aggressive, result-oriented representation in courtrooms and arbitration tribunals, ensuring that disputes—whether commercial or personal—are resolved with efficiency and discretion."
        }
      ],
      advantages: [
        {
          id: "adv-1",
          title: "Unmatched Partner-Level Involvement",
          description: "We reject the traditional law firm model where critical cases are delegated to junior associates. At Samrat Juris, every client receives direct, continuous engagement from our senior partners. You get top-tier strategic oversight at every stage of your matter."
        },
        {
          id: "adv-2",
          title: "Aggressive Turnaround Times",
          description: "In the modern economy, delayed advice is denied opportunity. We understand that whether you are closing a real estate acquisition, securing intellectual property, or resolving a critical family dispute, time is your most valuable asset. Our agile structure allows us to move faster, delivering precise legal solutions without institutional bottlenecks."
        },
        {
          id: "adv-3",
          title: "A Pan-India Footprint with Global Ambitions",
          description: "Rooted firmly in Hyderabad and Delhi, we have a deep understanding of domestic regulatory frameworks and local judicial nuances. As we scale to facilitate inbound and outbound cross-border transactions, our clients benefit from a firm that is locally grounded but globally minded."
        }
      ],
      practiceAreas: [
        {
          id: "pa-1",
          category: "Corporate, Commercial & Intellectual Property",
          items: [
            "Intellectual Property: Aggressive protection and enforcement of trademarks, copyrights, and patents.",
            "Startup Advisory: Entity structuring, founder agreements, and regulatory compliance.",
            "Commercial Contracts: Drafting and negotiating high-stakes vendor, partnership, and service agreements."
          ]
        },
        {
          id: "pa-2",
          category: "Dispute Resolution & Litigation",
          items: [
            "Commercial Litigation & Arbitration: Resolving high-value corporate conflicts, breach of contract, and shareholder disputes.",
            "Civil Litigation: Comprehensive representation in systemic civil disputes and property claims."
          ]
        },
        {
          id: "pa-3",
          category: "Real Estate & Infrastructure",
          items: [
            "Land & Property Disputes: Strategic resolution of land ownership, zoning, and title conflicts.",
            "Infrastructure Projects: Legal structuring for large-scale developments, acquisitions, and compliance."
          ]
        },
        {
          id: "pa-4",
          category: "Private Client, Criminal & Human Relations",
          items: [
            "Human Relations & Family Law: Navigating sensitive matters including divorce, child custody, and alimony with dignity and strategic care.",
            "Private Wealth Management: Succession planning, trusts, and estate management for high-net-worth individuals.",
            "Criminal Defense: Robust representation in general criminal matters.",
            "White-Collar Crime: Defending corporate clients, promoters, and individuals against allegations of financial fraud, compliance breaches, and regulatory investigations."
          ]
        }
      ],
      audiences: [
        {
          id: "aud-1",
          title: "For Startup Founders & Enterprises",
          description: "You are building the future; you need a law firm that operates at your speed. Samrat Juris provides the legal architecture your business needs to scale safely. From locking down your intellectual property to resolving high-stakes commercial disputes, our partners act as an extension of your executive team."
        },
        {
          id: "aud-2",
          title: "For High-Net-Worth Individuals",
          description: "Wealth preservation and personal legacy require nuanced, highly confidential legal strategies. Whether you are managing complex real estate portfolios, navigating a high-stakes divorce, or structuring generational wealth, we provide bespoke, discreet counsel tailored to your private interests."
        },
        {
          id: "aud-3",
          title: "For Individuals Seeking Justice",
          description: "Legal battles can be overwhelming. Whether you are facing a civil dispute, a land conflict, or a criminal charge, Samrat Juris brings institutional-grade legal firepower to the individual. We provide clarity in chaos and fight aggressively to secure the resolution you deserve."
        }
      ]
    };
  }
}
